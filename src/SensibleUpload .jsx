import React, { useState } from "react";

const SensibleUpload = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Select a file first");
            return;
        }

        try {
            const response = await fetch(
                "https://api.sensible.so/v0/extract/mydocs",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `d4b0678cc5b987da43cf504f91da04633de39ea7733f0eeee6f289cdd732a54e87d2af9a44a0ba53d55bf7ab7bc98bb5fc2e9e1ac28a65bdde7d4175fc8d30e1`,
                        // ❌ Do NOT set Content-Type manually
                    },
                    body: file,
                }
            );
            console.log(response)
            const text = await response.text();

            try {
                const data = JSON.parse(text); // If JSON, parse it
                setResult(data.parsed_document);
            } catch (err) {
                console.log("RAW ERROR:", text); // HTML or error message
                alert("API Error:\n" + text);
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("Upload failed: " + error.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Sensible API File Upload Test</h2>

            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <br /><br />
                <button type="submit">Upload & Extract</button>
            </form>

            {result && (
                <pre style={{ marginTop: "20px", background: "#eee", padding: "10px" }}>
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default SensibleUpload;
