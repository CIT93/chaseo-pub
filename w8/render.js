const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }
  
  function renderTblBtn(index, data, obj){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);

    btnDel.addEventListener('click', function(e){
      console.log("delete button clicked");
      console.log(e);
      data.splice(index, 1);
      renderTbl(data);
    });

    btnEdit.addEventListener('click', function(e){
      console.log("edit button clicked");
      console.log(e);
      FORM[1].value = obj.firstName;
      FORM[2].value = obj.lastName;
      FORM[3].value = obj.houseM;
      FORM[4].value = obj.houseS;
      data.splice(index, 1);
      renderTbl(data);
    });
    return td;
  }

  function renderTblBody(data){
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
      console.log(index);
      const tr = document.createElement("tr");
      for (const [key, value] of Object.entries(obj)) {
        if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
      }
      const td = renderTblBtn(index, data, obj);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
     return tbody;
  }
  
  function renderTbl(data){
    TBL.innerHTML = "";
    if(data.length !==0){
      console.log("Build the table");
      const table = renderTblHeading();
      const tbody = renderTblBody(data);
      table.appendChild(tbody);
      TBL.appendChild(table);
    }
   
  }

export {renderTbl, renderTblHeading };

// So we can just make multiple render.js files rather than writing large amounts of code?