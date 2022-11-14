import React from 'react'
import { Link } from "react-router-dom";

function navBar() {
    return (
        <div>
            {/* NavBar */}

            <nav class="navbar navbar-expand-lg fixed-top bg-danger text-light">
                <div class="container-fluid">
                    <Link  class="navbar-brand text-light" to="/">Pune Metro</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link  class="nav-link text-light" to="/album">Album</Link>
                            </li>
                            <li class="nav-item">
                                <Link  class="nav-link text-light" to="/todos">Todos</Link>
                            </li>
                            <li class="nav-item">
                                <Link  class="nav-link text-light" to="/product">Product</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navBar
