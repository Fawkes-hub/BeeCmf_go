package common

import (
	"crypto/md5"
	"fmt"
	"io"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

//通用的MD5加密方法  双层加密
func SycMd5(str string) string {
	h := md5.New()
	var err error
	_, err = io.WriteString(h, str)
	if err != nil {
		panic("错误：密码加密失败")
	}
	_, err = io.WriteString(h, fmt.Sprintf("%x", h.Sum(nil)))
	if err != nil {
		panic("错误：密码加密失败")
	}
	return fmt.Sprintf("%x", h.Sum(nil))
}

//RandomString 在数字、大写字母、小写字母范围内生成num位的随机字符串
func RandomString(length int) string {
	// 48 ~ 57 数字
	// 65 ~ 90 A ~ Z
	// 97 ~ 122 a ~ z
	// 一共62个字符，在0~61进行随机，小于10时，在数字范围随机，
	// 小于36在大写范围内随机，其他在小写范围随机
	rand.Seed(time.Now().UnixNano())
	result := make([]string, 0, length)
	for i := 0; i < length; i++ {
		t := rand.Intn(62)
		if t < 10 {
			result = append(result, strconv.Itoa(rand.Intn(10)))
		} else if t < 36 {
			result = append(result, string(rand.Intn(26)+65))
		} else {
			result = append(result, string(rand.Intn(26)+97))
		}
	}
	return strings.Join(result, "")
}
