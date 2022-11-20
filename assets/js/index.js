window.onload = () => {
    var tw = new typewriter($("#index_welcome"), $("#indx_message"));
    tw.type_text();
}

function typewriter(element, el_txt) {
    this.ci = 0;
    this.msg_wel = element.getAttribute('data-text');
    this.msg_end = element.getAttribute('data-end');
    this.carret = "▮";
    this.time_type = 85;
    this.time_del = 20;
    this.time_wait = 1000;
    this.el = element;
    this.txt = el_txt;
    this.del = false;
    this.end = false;

    this.finish = () => {
        this.el.innerHTML = this.el.innerHTML.slice(0, -1);
        this.txt.style.maxHeight = this.txt.scrollHeight + "px";
    }

    this.type_text = () => {
        if (!this.del && !this.end) {
            if (this.ci < this.msg_wel.length) {
                this.el.innerHTML = this.el.innerHTML.slice(0, -1);
                this.el.innerHTML += this.msg_wel.charAt(this.ci) + this.carret;
                this.ci++;
                setTimeout(() => { this.type_text();}, this.time_type);
            }
            else {
                this.del=true;
                setTimeout(() => { this.type_text();}, this.time_wait);
            }
        } else if (this.del) {
            if (this.el.innerHTML.length > 1){
                this.el.innerHTML = this.el.innerHTML.slice(0, -2);
                this.el.innerHTML += this.carret;
                setTimeout(() => { this.type_text();}, this.time_del);
            }
            else {
                this.del = false;
                this.end=true;
                this.ci = 0;
                setTimeout(() => { this.type_text();}, this.time_wait);
            }
        } else if (this.end) {
            if (this.ci < this.msg_end.length) {
                this.el.innerHTML = this.el.innerHTML.slice(0, -1);
                this.el.innerHTML += this.msg_end.charAt(this.ci)  + this.carret;
                this.ci++;
                setTimeout(() => { this.type_text();}, this.time_type);
            }
            else {
                var self = this;
                setTimeout(() => { self.finish();}, this.time_wait);
                console.log("FINISHED");
            }
        }
    }
}
