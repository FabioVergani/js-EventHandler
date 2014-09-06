
(function(o,k,a,b,x){

o[b+k]=(b=x(b),function(s,f,c){return b(this,s,f,c)});//removeEventHandler
o[a+k]=(a=x(a),function(s,f,c){return a(b(this,s,f),s,f,c)});//(safe)addEventHandler

})(EventTarget.prototype,'EventHandler','add','remove',function(t){return(function(e,s,f,c){e[this.i](s,f,Boolean(c));return e}).bind({'i':t+'EventListener'})});
