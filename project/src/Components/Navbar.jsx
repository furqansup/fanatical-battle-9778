import React from "react";

export function Navbar() {
  return (
    <div id="navbar">
      <ul id="ul">
        <a href="/">
          <div id="logo">
            <img
              src="https://document-export.canva.com/Usg-Q/DAFX7WUsg-Q/6/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230118T130556Z&X-Amz-Expires=86405&X-Amz-Signature=cf097b267ed1914d4f893cefbfa06209045a4327f4a713d238e1abbdfd8f35d4&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2019%20Jan%202023%2013%3A06%3A01%20GMT"
              alt=""
            />
          </div>
        </a>
        <a href="/product">
          <div>Products</div>
        </a>
        <div>Weekly Ads</div>
        <div>Careers</div>
        <a href="/cart">Cart</a>
        <a href="/orders">Orders</a>
        <a href="/signup">
          <div>Sign up</div>
        </a>
        <a href="/login">
          <div>Login</div>
        </a>
      </ul>
    </div>
  );
}
