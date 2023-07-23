
        var tasks=[];
        var id=0;
        var input=document.getElementById("input");
           //local storage
           tasks=JSON.parse(localstorage.getitem("todos"));
           displayTasks();
        function addTask()
        {
             if(input.value==='')
             {
                alert("You must write something");
             }
             else{
                
            tasks.push({id:++id,task:input.value}); 
           // console.log(tasks);
            displayTasks();
            input.value='';
          }
             
        }
       

       function displayTasks()
       {
              vecha.innerHTML='';
             for(var i=0;i<tasks.length;i++)
             {       
                let li=document.createElement("li");
                
                li.innerHTML=`${tasks[i].task}<span><button id=${tasks[i].id} onclick=edit(id)>Edit</button><button id=${tasks[i].id}  onclick="DeleteTask(id)">Delete</button></span>`;
               li.id=tasks[i].id;
               localStorage.setItem(tasks[i].id,tasks[i].task);
               vecha.append(li);   
               localStorage.setItem("todos",JSON.stringify(tasks)); 
          }
       }
       //button.addEventListener("click",()=>removeTask(tasks[i].id));  
       function DeleteTask(k)
       { 

        for(var i=k-1;i<tasks.length-1;i++)
        { 
            if(i==k-1)
            {
            console.log(tasks[i].task)
            }    
            tasks[i].task=tasks[i+1].task;   
           //console.log(tasks[i].task)  
        }
        console.log(k);
        tasks.pop();
        id--;
        displayTasks();
       } 
       
       function edit(id)
       {
              vecha.innerHTML='';
                for(var i=0;i<tasks.length;i++)
                {       
                    let li=document.createElement("li");
                    // let span=document.createElement("span");
                    // let button=document.createElement("button");
                    if(i==id-1)
                    {
                    li.innerHTML=`<input type="text" id="chanukya" class="edit"><span><button id=${tasks[i].id} onclick="final(id)">save</button><button id=${tasks[i].id}onclick="DeleteTask(id)">Delete</button></span>`;                        
                    }
                    else 
                    {
                    li.innerHTML=`${tasks[i].task}<span><button id=${tasks[i].id}class="edit">Edit</button><button id=${tasks[i].id}  onclick="DeleteTask(id)">Delete</button></span>`;
                    }
                    li.id=tasks[i].id;
                    vecha.append(li);
                }  
        }

       function final(id)
       {
        const newelement=document.getElementById("chanukya");
        if(newelement.value=='')
             {
                alert("You must write something");
             }
        else
        {
        tasks[id-1].task=newelement.value;
         console.log(id,newelement.value);
         displayTasks();
        }
       }               
        

       
