import React from "react";
import { FaStar } from "react-icons/fa";
import Container from "react-bootstrap/Container";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 750,
        padding: 10,
        margin: "20px 0",
        minHeight: 150,
    },
    button:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 200,
        padding: 10,
        margin: 20,
    }
}

export default function Reviews() {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => (
        setCurrentValue(value)
    );

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return(
        <Container>
        <div style={styles.container}>
            <h2>Club Reviews</h2>
            <div style  = {styles.start}>
                {stars.map((_, index) => {
                    return(
                        <FaStar 
                        key={index}
                        size={24}
                        style={{
                            marginRight: 10,
                            cuursor: "pointer"
                        }}
                        color ={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        onClick={() => handleClick(index+1)}
                        onMouseOver={() => handleMouseOver(index+1)}
                        onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="What's your feedback"
                style = {styles.textarea}
            />
            <button style = {styles.button}>Submit</button>

        </div>
        </Container>
    );
};