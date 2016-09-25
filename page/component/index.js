var time = 0;
Page({
    data: {
        list: [
            {
                id: 'view',
                name: '视图容器',
                open: false,
                pages: ['view', 'scroll-view', 'swiper']
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: ['text', 'icon', 'progress']
            }, {
                id: 'form',
                name: '表单组件',
                open: false,
                pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch']
            }, {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['action-sheet', 'modal', 'toast', 'loading']
            }, {
                id: 'nav',
                name: '导航',
                open: false,
                pages: ['navigator']
            }, {
                id: 'media',
                name: '媒体组件',
                open: false,
                pages: ['image', 'audio', 'video', 'map', 'canvas']
            }
        ]
    },
    widgetsToggle: function (e) {
        time++;
        console.log('=========>', e.currentTarget.id);
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            console.log(time);
            if (list[i].id == id) {
                list[i].open = true;
            } else {
                list[i].open = false;
            }
        }
        this.setData({
            list: list
        });
        console.log(this.data.list);
    }
});
