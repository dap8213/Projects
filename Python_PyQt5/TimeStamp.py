from PyQt5.QtCore import QDate, QTime, QDateTime, Qt

time = QTime.currentTime()
now = QDate.currentDate()

print(time.toString(Qt.DefaultLocaleLongDate))
print(now.toString(Qt.DefaultLocaleLongDate))
