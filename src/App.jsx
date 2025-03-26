import React from 'react'
import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/Toaster'

import Home from './pages/Home'
import NotFound from './pages/Not-found'
import AboutEs from './pages/AboutEs';
import ContactEs from './pages/ContactEs';


import './App.css'

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/aboutEs" component={AboutEs} />
      <Route path="/contactEs" component={ContactEs} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />

    </Switch>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App