import React from "react";
import { Card } from "react-bootstrap";
import UnsplashKatherineSousa from UnsplashKatherineSousa;

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem" }}>
                {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
                <Card.Img variant="top" src={UnsplashKatherineSousa} />
                Photo by <a href="https://unsplash.com/@ksousaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katherine Sousa</a> on <a href="https://unsplash.com/@ksousaphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                <Card.Body>
                    <Card.Title>Katherine Sousa</Card.Title>
                    <Card.Text>
                        I am just a picture of drinks
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard