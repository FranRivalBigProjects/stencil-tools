const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value || '';
  const val=parseFloat(document.getElementById('value').value||'0');
  const lines = txt ? txt.split('\n').length : 0;
  res.innerText = 'Elements: ' + lines + '\nMetric: ' + val;
}