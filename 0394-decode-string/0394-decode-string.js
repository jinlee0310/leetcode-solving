const getRepeatStr = (s, startIdx) => {
  let repeatStr = "";
  const stack = [];
  for (let i = startIdx; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push("[");
      if (i !== startIdx) repeatStr += "[";
    } else if (s[i] === "]") {
      stack.pop();
      if (stack.length === 0) {
        return { endIdx: i, repeatStr };
      }
      repeatStr += "]";
    } else {
      repeatStr += s[i];
    }
  }
};

const decodeString = (s) => {
  let answer = "";
  let repeatCnt = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      repeatCnt += s[i];
    } else if (s[i] === "[") {
      const { endIdx, repeatStr: targetStr } = getRepeatStr(s, i);
      const repeatStr = decodeString(targetStr);
      answer += repeatStr.repeat(Number(repeatCnt));
      repeatCnt = "";
      i = endIdx ;
    } else {
      answer += s[i];
    }
  }
  return answer;
};