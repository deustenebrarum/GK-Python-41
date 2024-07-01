# 123456

number = int(input())

digits_count = 6

if (
    number > 10**digits_count - 1 or 
    number < 10**(digits_count - 1)
):
    print('Некорректное число')
    exit(1)

sum1 = 0
sum2 = 0

sum1 += number % 10
number //= 10
sum1 += number % 10
number //= 10
sum1 += number % 10
number //= 10

sum2 += number % 10
number //= 10
sum2 += number % 10
number //= 10
sum2 += number % 10

if sum1 == sum2:
    print('lucky')
else:
    print('not lucky')
