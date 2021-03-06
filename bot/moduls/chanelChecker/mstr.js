module.exports.chanelChecker = {
    modulename:'chanelChecker',
    name:'⚙️' + ' - ' + 'کانال تلگرام', 
    back:'🔙 بازگشت به ⚙️ کانال تلگرام', 

    addChannelRegister: '/registerbot',

    btns: {
        settings : 'تنظیمات',
        newchannel : 'افزودن کانال',
    },

    query: {
        chanelChecker:'chanelChecker',
        admin:'a',
        settings:'st',
        activation:'act',
    },

    datas:{
        channel: {
            'name': 'معرفی ایدی کانال',
            'mess': 'لطفا ایدی کانال را بدون @ ارسال کنید.' + '\n' + 'سپس ابتدا ربات به عنوا ادمین در کانال مورد نظر عضو کنید، سپس پیام زیر را به داخل کانال ارسال کنید، پس از تشخیص کانال توسط ربات این پیام به صورت اتوماتیک حذف خواهد شد.' + '\n /registerbot',
        },
        mandatoryMembership:{
            'name':'عضویت اجباری',
            'mess':'اگر عضویت اجباری فعال باشد، ربات به کاربران غیر عضو در کانال، خدمات ارائه نمی کند. اما اگر غیر فعال باشد کاربران میتوانند بلا مانع از ربات استفاده کنند اما فقط اگر عضو کانال باشند میتوانند بن های تخفیف عضویت را دریافت کنند.',
            'items': [
                {'name': 'true', 'lable':'بلی'},
                {'name': 'false', 'lable':'خیر'},
            ]
        }
    }
}