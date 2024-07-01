while True:
    month = int(input())
    if month == 0:
        break
    if month >= 3 and month <= 5:
        print('Весна')
    elif month >= 6 and month <= 8:
        print('Лето')
    elif month >= 9 and month <= 11:
        print('Осень')
    else:
        print('Зима')
