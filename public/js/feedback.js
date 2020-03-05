
//retrieve form dom element from page

let form = document.querySelector('.feedback-form');
console.log(form);
//attach event listener
form.addEventListener('submit',(e)=>{

    

e.preventDefault();

let name = document.querySelector('#feedback-form-name');
let title = document.querySelector('#feedback-form-title');
let message = document.querySelector('#feedback-form-message');

//javascript object
let data = {
    name: name.value,
    title: title.value,
    message: message.value
}
fetch('/api',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data) })

    .then((response)=>{
        
        return response.json();
        
    })
    .then((feedbackData)=>{
        console.log(feedbackData);
        let output = ""
        feedbackData.forEach((item, key)=>{
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
        })
        let updateCode = document.querySelector('.feedback-messages');
        updateCode.innerHTML = output;
    })
    
});


