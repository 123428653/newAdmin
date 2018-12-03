import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

/* export function loginByUsername() {
  return request({
    url: '/index/index.json',
    method: 'get'
  })
} */

export function registerByEmail(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/auth/jwt/register',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

