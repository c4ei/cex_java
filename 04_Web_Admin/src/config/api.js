export default {
    host: 'http://192.168.1.239:8801',
    common: {
        login: '/admin/system/employee/sign/in'
    },
    system: {
        permissionAll: '/admin/system/role/permission/all',
        role: '/admin/system/role/all',
        rolePermission: '/admin/system/role/permission',
        statistics: '/admin/system/statistics/dashboard'
    },
    otc:{
        //法币币种管理 피아트 통화 관리
        OtcCoin: '/admin/otc/otc-coin/page-query',
        OtcCoinDetail:'admin/otc/otc-coin/detail',
        update: 'admin/otc/otc-coin/update',
        create: 'admin/otc/otc-coin/create',
        //法币广告管理 피아트 통화 광고 관리
        advertise:'admin/otc/advertise/page-query',
        advertiseStatus:'admin/otc/advertise/alter-status',
        //法币订单管理 피아트 통화 주문 관리
        order:'admin/otc/order/page-query',
        orderDetail:'admin/otc/order/detail',
        //法币申诉管理 피아트 불만 관리
        appeal:'admin/otc/appeal/page-query',
        detail:'admin/otc/appeal/detail',
        cancelOrder:'admin/otc/appeal/cancel-order',//取消订单 주문 취소
        releaseCoin: 'admin/otc/appeal/release-coin',//放币 방출 동전
    }
}
