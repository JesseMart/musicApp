// retrieve form dom element from page
let form = document.querySelector('.feedback-form')
// attach event listener
form.addEventListener('submit', (e) => {
    // prevent default behaviour
// fetch call to post data back to server (/api)
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
    fetch('/api', {
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response)=>{
        //converts to javascript object
        return response.json()
    })
    .then((feedbackData) => {
        //array of objects
        console.log(feedbackData);
        ///  [{}, {}, {}, {name:"", title:"", message:""}]
        updateFeedback(feedbackData)
    })   
})
document.querySelector('.feedback-messages').addEventListener('click', (e)=>{
    if(e.target.className == 'glyphicon glyphicon-remove'){
        //fetch with delete method
        //api/0  //api/1
        fetch('/api/' + e.target.id, {
            method: 'DELETE'
        })
        .then((response)=>{
            return response.json()
        })
        .then((feedBackData)=>{
            updateFeedback(feedBackData);
        })
    }
} )
let setUP = () => {
    fetch('/api')
    .then((response)=>{
        return response.json()
    })
    .then((feedbackData)=>{
        updateFeedback(feedbackData);
    })
}
let updateFeedback = (feedbackData) => {
    let output = "";
    // [{}, {}, {}, {}]
    //<button><span id="0"></span></button>
    //<button><span id="1"></span></button>
    //<button><span id="3"></span></button>
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
    let updateCodeBlock = document.querySelector('.feedback-messages');
    updateCodeBlock.innerHTML = output;
}
setUP()
