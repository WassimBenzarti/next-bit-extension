import fetch from "node-fetch";

export default function search(queryString: string) {

    return fetch("https://api.bit.dev/search/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            "queryString": queryString,
            "results": {
                "type": "component", "aggregatedBy": "none"
            },
            "limit": 20, "offset": 0
        })
    }).then((r: any) => r.json())
}