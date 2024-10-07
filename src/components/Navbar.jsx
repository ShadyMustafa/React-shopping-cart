

export function NavBar(){
    return(
        <div className="NavBar">
            <nav class="navbar navbar-dark bg-dark " id="NavBAR">
                <div class="container-fluid">
                    <a class="navbar-brand" href="go">Shopping List</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href='go'>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="go">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="go" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="go">Action</a></li>
                        <li>
                        <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="go">About us</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
}