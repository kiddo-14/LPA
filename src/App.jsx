import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormBox from './component/FormBox';
import RuleBox from './component/RuleBox';
import Result from './component/ResultBox';
import Header from './component/Header';

const App = () => {
  const [email, setEmail] = useState('');
  const [pdfname, setPdfname] = useState('');
  const [rules, setRules] = useState('');

  return (
    <Router>
      <div className='w-screen h-screen'>
        <Header />
        <Routes>
          {/* Define the route for the FormBox component */}
          <Route
            path="/"
            element={
              <FormBox
                Email={email}
                setEmail={setEmail}
                setPdfName={setPdfname}
                rules={rules}
                setRules={setRules}
              />
            }
          />

          {/* Define the route for the Result component */}
          <Route
            path="/result"
            element={<Result Email={email} pdf={pdfname} rules={rules} />}
          />

          {/* Define the route for the RuleBox component (if needed) */}
          <Route
            path="/rules"
            element={<RuleBox setResult={() => {}} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
