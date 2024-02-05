function customReact(reactElement,container){

      /*

      const domElement=document.createElement(reactElement.type)
      domElement.innerHTML=reactElement.children
      domElement.setAttribute('href',reactElement.props.href)
      domElement.setAttribute('target',reactElement.props.target)

      container.appendChild(domElement)

      but above is not wright way becuase when multiple properties are there in props then 
      we should use for loop just like  below

      */
      const domElement=document.createElement(reactElement.type)
      domElement.innerHTML=reactElement.children

      for(prop in reactElement.props){
            if(prop==='children') continue;

            domElement.setAttribute(prop,reactElement.props[prop])
      }


      container.appendChild(domElement)


}
const reactElement={
      type:'a',
      props:{
            href:'https://google.com',
            target:'_blank'
      },
      children:'click to go to google'
}

const mainContainer=document.querySelector("#root")
customReact(reactElement,mainContainer)