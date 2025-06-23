// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, Nav } from 'react-bootstrap';

// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import ShopScreen from './ShopScreen';
// import ErrorBoundary from './ErrorBoundary';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="/">TaskApp</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/">Home</Nav.Link>
//             <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
//             <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Container className="mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ErrorBoundary>
//                 <HomeScreen />
//               </ErrorBoundary>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ErrorBoundary>
//                 <ProfileScreen />
//               </ErrorBoundary>
//             }
//           />
//           <Route
//             path="/shop"
//             element={
//               <ErrorBoundary>
//                 <ShopScreen />
//               </ErrorBoundary>
//             }
//           />
//         </Routes>
//       </Container>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import PostList from './PostList';

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;
