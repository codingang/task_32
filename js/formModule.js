/**
 * Created by wangtingdong on 16/4/15.
 */
//表单验证工厂
function Form(data) {
    this.data = data;
    this.ipt = document.getElementById(data.id);
    this.tip = this.ipt.nextElementSibling;
    this.validator = data.validator;
    this.init();
}
Form.prototype= {
    init: function () {
        on(this.ipt, 'focus', this.default_tip.bind(this));
        on(this.ipt, 'blur', this.validator.bind(this));
        on(this.ipt, 'change', this.validator.bind(this));
    },
    default_tip: function () {
        this.tip.innerHTML = this.data.default_text;
        this.tip.className = 'default';
        this.ipt.className = 'default';
    },
    true_tip: function () {
        this.tip.innerHTML = this.data.success_text;
        this.tip.className = 'true';
        this.ipt.className = 'true';
    },
    error_tip: function (i) {
        this.tip.innerHTML = this.data.fail_text[i];
        this.tip.className = 'error';
        this.ipt.className = 'error';
    }
};