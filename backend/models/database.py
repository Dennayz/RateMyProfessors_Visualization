import mysql.connector
from mysql.connector import Error
import yaml
from datetime import datetime

db = yaml.load(open('db.yaml'))


class Database:
    # initialize database variables from yaml file
    _USERNAME = db['mysql_user']
    _PASSWORD = db['mysql_password']
    _HOST = db['mysql_host']
    _MYSQL_DB = db['mysql_db']

    def __init__(self):
        """
        try to connect to database
        """
        self.my_db = None
        try:
            self.my_db = mysql.connector.connect(
                host=self._HOST,
                user=self._USERNAME,
                passwd=self._PASSWORD,
                database=self._MYSQL_DB
            )
        except Error as e:
            print(e)

        self.cursor = self.my_db.cursor()

    def close_connection(self):
        """
        close the database connection
        :return: None
        """
        self.my_db.close()

    def get_all_professors(self):
        """
        fetch all professors in database to display in history table
        :return: complete list of professors
        """
        self.cursor.execute("SELECT * FROM professors ORDER BY date DESC")
        result = self.cursor.fetchall()
        professor_list = []

        for prof in result:
            prof_data = {"tid": prof[0], "name": prof[1], "bio": prof[2], "date": str(prof[3])}
            professor_list.append(prof_data)

        self.close_connection()
        return str(professor_list)

    def insert_professor(self, prof_tid, prof_name, prof_bio):
        """
        insert specified professor into database, if professor already exists, update the date accessed for the
        existing tid
        :param prof_tid: professor's id
        :param prof_name: professor's name
        :param prof_bio: professor's bio
        :return: None
        """
        self.cursor.execute("INSERT INTO professors (tid, name, bio, date) VALUES (%s, %s, %s, %s) "
                            "ON DUPLICATE KEY UPDATE date = %s",
                            (prof_tid, prof_name, prof_bio, datetime.now(), datetime.now()))
        self.my_db.commit()
        self.close_connection()

    def delete_professor_by_tid(self, prof_tid):
        """
        delete the specified professor by tid in database
        :param prof_tid: professor's id
        :return: None
        """
        self.cursor.execute("DELETE FROM professors WHERE tid = %s", (prof_tid,))
        self.my_db.commit()
        self.close_connection()



