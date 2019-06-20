import React from 'react';

/**
 * 
 */
class TextInput extends React.Component {


    /**
     * Render
     */
    render() {
        const { label, type, name, placeholder, onChange } = this.props;
        return (
            <div className="field">

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>

        );
    }
}

export default TextInput;