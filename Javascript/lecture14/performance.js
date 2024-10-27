
// maan lo mje 100  para grapghs add krne me apne code me to konsa best way hoga discuss krege;


// code 1 -> brut method

{
    let t1 = performance.now();
    for(let i = 1; i<=100; i++) {

        let parent = document.createElement('p');
        parent.textContent = i + " paragraph";

        let div = document.querySelector('.myDiv');
        document.body.appendChild(parent);

    }
    let t2 = performance.now();

    let t3 = t2-t1;
    console.log(t3); // to iss code ne liye hai 0.2999 sec;

}

// code 2 -> Optimal;
{
    let t1 = performance.now();

    let div = document.createElement('myDiv');
    for(let i = 1; i<=100; i++) {

        let parent = document.createElement('p');
        parent.textContent = i + " paragraph";

        div.appendChild(parent);

    }
    document.body.appendChild(div);
    let t2 = performance.now();

    let t3 = t2-t1;
    console.log(t3); // to iss code ne liye hai 0.2999 sec;


}



