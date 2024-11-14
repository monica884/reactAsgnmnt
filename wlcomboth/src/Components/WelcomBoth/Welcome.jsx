
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "react-bootstrap";

export default function Welcome() {
    const [page, setPage] = useState(false)
    const [gpage, setGpage] = useState(false)

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8 shadow-lg p-3 mb-5 bg-body rounded rounded-pill">
                        <h1 className="text-center">Welcome To The Dashboard</h1>

                        <button type="button" class="btn btn-primary btn-lg ms-3" onClick={() => setPage(true)}>Login as Admin</button>
                        <button type="button" class="btn border-secondary btn-lg ps-3 ms-3" onClick={() => setGpage(true)}>Log in as Guest</button>
                    </div>

                    <div className="col-8">
                        {
                            page ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">

                                            <h3>Welcome, Admin</h3><button className="btn btn-primary" onClick={() => setPage(false)}>Signoutout</button>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Value</th>
                                                        <th scope="col">Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>item1</td>
                                                        <td>100</td>
                                                        <td><button type="button" className="btn btn-danger">Edit</button></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>item2</td>
                                                        <td>200</td>
                                                        <td><button type="button" className="btn btn-danger">Edit</button></td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>item3</td>
                                                        <td>243</td>
                                                        <td><button type="button" className="btn btn-danger">Edit</button></td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> : null}

                        {/* Guest table */}

                        {
                            gpage ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8">

                                            <h3>Welcome, Guest</h3><button className="btn btn-primary" onClick={() => setGpage(false)}>Signoutout</button>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>item1</td>
                                                        <td>100</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>item2</td>
                                                        <td>200</td>


                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>item3</td>
                                                        <td>243</td>


                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>

        </>
    )
}