# 123456
number = int(input())

while True:
    digit1_place = int(input())
    # 5
    digit2_place = int(input())
    # 2
    
    if (
        digit1_place < 1 or digit1_place > 6 or 
        digit2_place < 1 or digit2_place > 6
    ):
        print("Invalid placements")
        continue

    digit1_place = (6 - digit1_place) # 1
    digit2_place = (6 - digit2_place) # 4

    digit1 = number // 10**digit1_place % 10 # 5
    digit2 = number // 10**digit2_place  % 10 # 2

    result = number - digit1*10**digit1_place
    # 123406
    result -= digit2*10**digit2_place
    # 103406
    result += digit1*10**digit2_place
    # 153406
    result += digit2*10**digit1_place
    # 153426
    print(result)
