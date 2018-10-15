import React from 'react';

class TickButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {bubble: this.props.onChange !== null ? true : false};

        if(this.state.bubble)
        {
            this.state.selected = this.props.selected === null ? false : this.props.selected
        }
    }

    toggle = () => {

        if(this.props.preventtoggle === true)
        {

        }
        else
        {
            var newSelected = !(this.state.bubble ? (this.props.selected === null ? false : this.props.selected) : this.state.selected);
            if(this.state.bubble)
                this.props.onChange(this.props.id, newSelected);
            else
                this.setState({selected: newSelected});
        }

        
            
    }

    selected = () => {
        return this.state.selected;
    }

    render() {
        var selected = this.state.bubble ? (this.props.selected === null ? false : this.props.selected) : this.state.selected;
        var selectedClassName = this.props.selectedClassName === undefined ? "btn btn-primary" : this.props.selectedClassName;
        var unselectedClassName = this.props.unselectedClassName === undefined ? "btn btn-default" : this.props.unselectedClassName;
        return (
            selected ?
                <button type="button" role="button" className={selectedClassName} style={{ marginRight: 10, marginBottom: 10 }} onClick={(e) => { e.preventDefault(); this.toggle(); }}><i className="fa fa-check"></i> {this.props.name}</button>
            :
                <button type="button" role="button" className={unselectedClassName} style={{ marginRight: 10, marginBottom: 10 }} onClick={(e) => { e.preventDefault(); this.toggle(); }}><i className="fa fa-times"></i> {this.props.name}</button>
        );
    }

}


class TickButtonArrayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { options: this.props.options };

        //this.selectOptions(this.props);

        //alert('stateOptions: ' + JSON.stringify(this.state.options));
    }


    selectOptions = (props) => {
        var options = props.options;
        var selectedList = props.selected != null ? props.selected : [];

        for (let x = 0; x < options.length; x++) {
            for (let y = 0; y < selectedList.length; y++) {
                if (options[x].id === selectedList[y])
                    options[x].selected = true;
            }
        }


        this.setState({ options: options });
    }

    componentWillMount() {
        this.selectOptions(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.selectOptions(nextProps);
    }

    onChange = (id, selected) => {
        var options = this.state.options;
        for(let x=0;x<options.length;x++)
        {
            if(options[x].id === id)
                options[x].selected = selected;
        }
        this.setState({options: options});

        if(this.props.onChange !== null)
        {
            let list = [];
            for(let x=0;x<options.length;x++)
            {
                if(options[x].selected)
                    list.push(options[x].id);
            }
            this.props.onChange(list);
        }
    }

    selected = () => {
        let list = [];
        for(let x=0;x<this.state.options.length;x++) {
                                if(this.state.options[x].selected)
                                list.push(this.state.options[x].name);
                                }
                                return list;
    }



    render() {
        let component=this;
        return (
            <div>
                {
                    this.state.options.map(function(tickButton){
                        return <TickButtonComponent key={tickButton.id} id={tickButton.id} selectedClassName={component.props.selectedClassName} unselectedClassName={component.props.unselectedClassName} selected={tickButton.selected} name={tickButton.name} onChange={component.onChange} />
                    })
                }
            </div>
        );
    }

}


class TickButtonRadioComponent extends React.Component {
    constructor(props) {
        super(props);

        var options = this.props.options;
        var selected = this.props.selected;

        for(let x=0;x<options.length;x++)
        {
            if(options[x].id === selected)
                options[x].selected = true;
        }

        this.state = {options: options};
    }

    onChange = (id, selected) => {
        var options = this.state.options;

        for(let x=0;x<options.length;x++)
        {
            if(options[x].id === id)
                options[x].selected = true;
            else
                options[x].selected = false;
        }

        this.setState({options: options});

        if(this.props.onChange != null)
        {
            var id = null;
            for(let x=0;x<options.length;x++)
            {
                if(options[x].selected)
                {
                    id = options[x].id;
                    break;                              
                }
            }
            this.props.onChange(id);
        }
    }

    selected = () => {
        var id = null;
        for(let x=0;x<this.state.options.length;x++)
        {
            if(this.state.options[x].selected)
            {
                id = this.state.options[x].id;
                break;
            }
        }
        return id;
    }

    render() {
        var component = this;
        return (
            <div>
                {
                    this.state.options.map(function(tickButton){
                        return <TickButtonComponent id={tickButton.id} selected={tickButton.selected} name={tickButton.name} onChange={component.onChange} />
                    })
                }
            </div>
        );
    }

}

export { TickButtonComponent, TickButtonArrayComponent, TickButtonRadioComponent };