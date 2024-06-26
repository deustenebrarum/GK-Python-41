HOURS_IN_DAY = 24
MINUTES_IN_HOUR = 60
SECONDS_IN_MINUTE = 60

MENU_POINT_HOURS = '1'
MENU_POINT_MINUTES = '2'
MENU_POINT_SECONDS = '3'

print(
    'Сколько осталось до полуночи:\n' +
    f'{MENU_POINT_HOURS}) часов\n' +
    f'{MENU_POINT_MINUTES}) минут\n' +
    f'{MENU_POINT_SECONDS}) секунд\n'
)

user_choice = input()

day_seconds_passed = int(input())
day_seconds_left = (
    HOURS_IN_DAY * MINUTES_IN_HOUR *
    SECONDS_IN_MINUTE - 
    day_seconds_passed
)

result_text = f'Осталось {day_seconds_left} секунд до полуночи'

if user_choice == MENU_POINT_HOURS:
    data = day_seconds_left // SECONDS_IN_MINUTE * MINUTES_IN_HOUR
    result_text = f'Осталось {data} часов до полуночи'
elif user_choice == MENU_POINT_MINUTES:
    data = day_seconds_left // SECONDS_IN_MINUTE
    result_text = f'Осталось {data} минут до полуночи'
else:
    result_text = "Нет такого варианта"

print(result_text)
