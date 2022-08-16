# JavaScript twoSum

## <문제>
`twoSum`함수에 숫자배열과 '특정 수'를 인자로 넘기면,
더해서 '특정 수'가 나오는 index를 배열에 담아 return

<br>

```
nums: 숫자 배열
target: 두 수를 더해서 나올 수 있는 합계
return: 두 수의 index를 가진 숫자 배열
```
예를들면,


nums은 [4, 9, 11, 14]
target은 13 

nums[0] + nums[1] = 4 + 9 = 13 이죠?

그러면 [0, 1]이 return 되어야 합니다.

<br>

```
# 가정
target으로 보내는 합계의 조합은 배열 전체 중에 2개 밖에 없다고 가정하겠습니다.
```
```
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i ++) { 
    for (j = i + 1; j < nums.length; j ++) { 
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return "target에 해당하는 값이 없습니다."
}
console.log(twoSum([6,13,19,25],25))
module.exports = { twoSum };
```

배열을 순회하며 target의 값이 나오는 값들의 인덱스를 추출

for문을 사용해 배열의 각 요소를 돌며 i와 j값을 증가시킴

두번째 for문에선 중복된 인덱스를 피하기 위해 i에 +1을 해줌



