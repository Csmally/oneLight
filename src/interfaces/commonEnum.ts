/** 请求方法 */
enum ReqMethodName {
    GET = 'get',
    DELETE = 'delete',
    PUT = 'put',
    POST = 'post'
}

enum PATH_NAME {
    HOME = 'HOME',
    ORDERS = 'ORDERS',
    COMMUNITY = 'COMMUNITY',
    MINE = 'MINE'
}

enum PATH_NAME_ZH {
    HOME = '首页',
    ORDERS = '订单',
    COMMUNITY = '社区',
    MINE = '我的'
}

/**
 * 基础屏幕尺寸
 * 以iPhone6为基准
 */
enum BASE_SCREEN_SIZE {
    BASE_WIN_WIDTH = 375,
    BASE_WIN_HEIGHT = 667
}

export default {
    ReqMethodName,
    PATH_NAME,
    PATH_NAME_ZH,
    BASE_SCREEN_SIZE
}