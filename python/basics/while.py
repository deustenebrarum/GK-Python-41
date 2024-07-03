start = int(input())
end = int(input())

if start > end:
    start, end = end, start

_sum = 0
count = 0

while start < end:
    _sum += start
    start += 1
    count += 1

print(_sum)
print(_sum/count)
