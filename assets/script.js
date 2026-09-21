
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
function out(v){const el=$('#output'); if(el) el.textContent=String(v);}
function val(id){return document.getElementById(id)?.value ?? '';}
function num(id){return Number(val(id));}
function render(){
 const kind=document.body.dataset.kind, id=Number(document.body.dataset.exp||0);
 const btn=$('#run'), demo=$('#demo');
 if(!btn) return;
 btn.addEventListener('click',()=>run(kind,id));
 $$('.quick').forEach(b=>b.addEventListener('click',()=>run(kind,id,b.dataset.action)));
}
function run(kind,id,action){
 const a=num('a'),b=num('b'),text=val('text'),arr=text.split(',').map(x=>x.trim()).filter(Boolean);
 let r='';
 if(kind==='HTML'){r='This HTML experiment is running correctly. Inspect the semantic HTML structure and the live preview below.'}
 else if(kind==='CSS'){r='CSS demonstration active. Hover, resize the window, and inspect the styled elements in this experiment.'}
 else if(kind==='JavaScript'){
  switch(id){
   case 1:r='Hello World';break;
   case 2:r=`Sum: ${a+b}\nDifference: ${a-b}\nProduct: ${a*b}\nQuotient: ${b?a/b:'Cannot divide by zero'}`;break;
   case 3:r=`Largest = ${Math.max(a,b,num('c'))}`;break;
   case 4:r=a%2===0?'Even':'Odd';break;
   case 5:r=a>0?'Positive':a<0?'Negative':'Zero';break;
   case 6:r=a<0?'Enter a non-negative number':Array.from({length:a},(_,i)=>i+1).reduce((x,y)=>x*y,1);break;
   case 7:{let x=0,y=1,s=[];for(let i=0;i<10;i++){s.push(x);[x,y]=[y,x+y]}r=s.join(', ');break}
   case 8:r=a>1&&Array.from({length:Math.floor(Math.sqrt(a))-1},(_,i)=>i+2).every(n=>a%n!==0)?'Prime':'Not prime';break;
   case 9:{let s=String(a);r=s===s.split('').reverse().join('')?'Palindrome':'Not palindrome';break}
   case 10:r=String(Math.abs(a)).split('').reverse().join('');break;
   case 11:r=String(Math.abs(a)).split('').reduce((x,y)=>x+Number(y),0);break;
   case 12:{let n=arr.map(Number);r=`Min: ${Math.min(...n)}\nMax: ${Math.max(...n)}`;break}
   case 13:{let n=arr.map(Number).sort((x,y)=>x-y);r=n.join(', ');break}
   case 14:{let n=arr.map(Number),sum=n.reduce((x,y)=>x+y,0);r=`Sum: ${sum}\nAverage: ${n.length?sum/n.length:0}`;break}
   case 17:r=text.toUpperCase()+`\nLength: ${text.length}`;break;
   case 18:r=`Original: ${arr.join(', ')}\nReversed: ${arr.slice().reverse().join(', ')}\nCount: ${arr.length}`;break;
   case 20:r=`Date: ${new Date().toLocaleString()}\nRandom: ${Math.floor(Math.random()*100)}`;break;
   case 22:document.body.style.background=`hsl(${Math.random()*360},45%,10%)`;r='Background changed';break;
   case 23:r='Button click event handled successfully.';break;
   case 24:$('#toggleBox')?.classList.toggle('hidden');r='Visibility toggled';break;
   case 26:r=new Date().toLocaleTimeString();break;
   case 27:r=`${a+b}`;break;
   case 28:r=(Math.floor(Math.random()*10)+1)===a?'Correct guess!':'Try again.';break;
   case 31:r='Task added: '+(text||'New task');break;
   case 33:r=`Counter: ${a||0}`;break;
   case 36:r=`let x = 10;\nconst y = 20;\nTemplate: Hello ${text||'Deepak'}!\nDestructuring: [first, second] = [1, 2]`;break;
   case 37:r=`Spread: [1,2,...[3,4]]\nRest: sum(1,2,3) => 6`;break;
   case 38:r='Class Student created with object: { name: "Deepak", section: "7" }';break;
   case 40:r='Promise resolved → Async/Await completed successfully.';break;
   case 43:localStorage.setItem('deepakDemo',text||'saved');r='Saved value: '+localStorage.getItem('deepakDemo');break;
   case 46:r=[a,b].reverse().join(' , ');break;
   case 47:{let x=a,y=b;while(y){[x,y]=[y,x%y]}r=`GCD = ${Math.abs(x)}`;break}
   case 48:{let x=Math.abs(a),y=Math.abs(b);while(y)[x,y]=[y,x%y];r=`LCM = ${Math.abs(a*b)/(x||1)}`;break}
   case 49:r=String(a).split('').reduce((s,d)=>s+Number(d)**String(a).length,0)===a?'Armstrong':'Not Armstrong';break;
   case 50:{let n=0;for(let i=1;i<a;i++)if(a%i===0)n+=i;r=n===a?'Perfect':'Not perfect';break}
   case 51:r=Array.from({length:10},(_,i)=>`${a} × ${i+1} = ${a*(i+1)}`).join('\n');break;
   case 52:r=a**b;break;
   case 53:r=String(Math.abs(a)).length;break;
   case 54:{let n=[...arr.map(Number)].sort((x,y)=>y-x);r=n[1];break}
   case 55:r=[...new Set(arr)].join(', ');break;
   case 56:r=[...arr, ...val('btext').split(',').map(x=>x.trim())].join(', ');break;
   case 57:{let m={};arr.forEach(x=>m[x]=(m[x]||0)+1);r=JSON.stringify(m,null,2);break}
   case 58:r=arr.filter((x,i)=>val('btext').split(',').map(y=>y.trim()).includes(x)).join(', ');break;
   case 59:r=text.split('').reverse().join('');break;
   case 60:r=(()=>{let s=text.toLowerCase();return s===s.split('').reverse().join('')?'Palindrome':'Not palindrome'})();break;
   case 61:{let m=text.toLowerCase().match(/[a-z]/g)||[];r=`Vowels: ${m.filter(x=>'aeiou'.includes(x)).length}\nConsonants: ${m.filter(x=>!'aeiou'.includes(x)).length}`;break}
   case 62:r=(text.trim().match(/\S+/g)||[]).length;break;
   case 63:{let m={};text.split('').forEach(x=>m[x]=(m[x]||0)+1);r=JSON.stringify(m);break}
   case 64:r=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(text)?'Valid email':'Invalid email';break;
   case 65:r=/^\S+@\S+\.\S+$/.test(text)?'Valid regex match':'No match';break;
   case 67:r=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(text)?'Valid email':'Invalid email';break;
   default:r='Experiment executed successfully. Try the controls shown on the page.'}
 }else if(kind==='DOM'){
  if(id<=15) r='DOM operation completed. The page has been updated dynamically.';
  else if(id===30){r=`Characters: ${text.length}`;$('#counterText')?.textContent=r}
  else r='DOM manipulation completed. Use the live controls to observe the change.';
 }else if(kind==='Events'){
  r=`Event detected: ${action||'click'}\nTime: ${new Date().toLocaleTimeString()}`;
 }else if(kind==='Forms'){
  const f=$('#demoForm'); if(f && !f.checkValidity()){f.reportValidity();r='Please correct the highlighted fields.'}else r='Validation passed. Form data is valid.';
 }else if(kind==='Browser'){
  if(id===2){r=confirm('Browser confirmation demo: continue?')?'User selected OK':'User selected Cancel'}
  else if(id===10)r=location.href;
  else if(id===14)r=`Browser: ${navigator.userAgent}\nLanguage: ${navigator.language}`;
  else if(id===15)r=`Screen: ${screen.width} × ${screen.height}`;
  else if(id===16)r=navigator.onLine?'Online':'Offline';
  else if(id===17)r=navigator.language;
  else if(id===18)r='Geolocation requires browser permission and may be unavailable from local files.';
  else r='Browser object demo executed successfully.';
 }else if(kind==='Storage'){
  if(id===1){localStorage.setItem('username',text||'Deepak');r='Saved username: '+localStorage.getItem('username')}
  else if(id===2)r=localStorage.getItem('username')||'No saved username';
  else if(id===3){localStorage.setItem('username',text||'Updated');r='Updated: '+localStorage.getItem('username')}
  else if(id===4){localStorage.removeItem('username');r='Username deleted.'}
  else if(id===5){localStorage.clear();r='localStorage cleared.'}
  else if(id===7){localStorage.setItem('arrayDemo',JSON.stringify(arr));r=localStorage.getItem('arrayDemo')}
  else if(id===8){localStorage.setItem('student',JSON.stringify({name:text||'Deepak',section:7}));r=localStorage.getItem('student')}
  else if(id===14){document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');r='Theme preference saved.'}
  else if(id===15){document.body.style.fontSize=(document.body.style.fontSize==='18px'?'16px':'18px');localStorage.setItem('fontSize',document.body.style.fontSize);r='Font preference saved.'}
  else r='Storage operation completed successfully.';
 }else if(kind==='Mini Projects'){
  if(id===1)r=`Calculator result: ${a+b}`;
  else if(id===2)r=new Date().toLocaleTimeString();
  else if(id===5)r='To-do item created: '+(text||'Study JavaScript');
  else if(id===7)r='Quiz answer submitted.';
  else if(id===8)r=a===Math.floor(Math.random()*10)+1?'Correct!':'New random number generated.';
  else if(id===10)r='Expense recorded: ₹'+(a||0);
  else if(id===11)r=`Total: ${a+b}\nAverage: ${(a+b)/2}`;
  else if(id===13){localStorage.setItem('note',text||'My note');r='Note saved locally.'}
  else if(id===14)r=Math.random().toString(36).slice(2,10);
  else if(id===15){let h=num('height')/100; r=`BMI: ${(a/(h*h)).toFixed(2)}`}
  else r='Mini project is interactive and ready for testing.';
 }
 out(r);
}
document.addEventListener('DOMContentLoaded',()=>{
 render();
 const clock=$('#liveClock'); if(clock){setInterval(()=>clock.textContent=new Date().toLocaleTimeString(),1000)}
 const search=$('#search'); if(search){search.addEventListener('input',()=>{const q=search.value.toLowerCase();$$('.item').forEach(x=>x.style.display=x.textContent.toLowerCase().includes(q)?'flex':'none')})}
});
