import React, { Component } from "react"; 

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            filmes: []
        };
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
        //fetch()
    }
    loadFilmes(){
        //https://sujeitoprogramador.com/r-api/?api=filmes
        let url = "https://sujeitoprogramador.com/r-api/?api=filmes"
        fetch(url)
        .then((r) =>r.json())
        .then((json) => {
        
    })
}

    render(){
        return(
            <div>
                Pagina Home
            </div>
        );
    }
}

export default Home;

