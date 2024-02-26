import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameFortyNine = React.lazy(() => import("pages/FrameFortyNine"));
const FrameFortyEight = React.lazy(() => import("pages/FrameFortyEight"));
const FrameFortySeven = React.lazy(() => import("pages/FrameFortySeven"));
const FrameFortySix = React.lazy(() => import("pages/FrameFortySix"));
const FrameFortyFive = React.lazy(() => import("pages/FrameFortyFive"));
const FrameFortyFour = React.lazy(() => import("pages/FrameFortyFour"));
const FrameFortyOne = React.lazy(() => import("pages/FrameFortyOne"));
const FrameForty = React.lazy(() => import("pages/FrameForty"));
const FrameThirtyNine = React.lazy(() => import("pages/FrameThirtyNine"));
const FrameThirtyEight = React.lazy(() => import("pages/FrameThirtyEight"));
const FrameThirtySeven = React.lazy(() => import("pages/FrameThirtySeven"));
const FrameThirtySix = React.lazy(() => import("pages/FrameThirtySix"));
const FrameThirtyThree = React.lazy(() => import("pages/FrameThirtyThree"));
const FrameThirtyFive = React.lazy(() => import("pages/FrameThirtyFive"));
const FrameThirtyFour = React.lazy(() => import("pages/FrameThirtyFour"));
const FrameThirtyTwo = React.lazy(() => import("pages/FrameThirtyTwo"));
const FrameThirtyOne = React.lazy(() => import("pages/FrameThirtyOne"));
const FrameThirty = React.lazy(() => import("pages/FrameThirty"));
const FrameTwentyNine = React.lazy(() => import("pages/FrameTwentyNine"));
const FrameTwentyFour = React.lazy(() => import("pages/FrameTwentyFour"));
const FrameTwentyThree = React.lazy(() => import("pages/FrameTwentyThree"));
const FrameTwentyTwo = React.lazy(() => import("pages/FrameTwentyTwo"));
const FrameTwentyOne = React.lazy(() => import("pages/FrameTwentyOne"));
const FrameTwenty = React.lazy(() => import("pages/FrameTwenty"));
const FrameNineteen = React.lazy(() => import("pages/FrameNineteen"));
const FrameEighteen = React.lazy(() => import("pages/FrameEighteen"));
const FrameSeventeen = React.lazy(() => import("pages/FrameSeventeen"));
const FrameSixteen = React.lazy(() => import("pages/FrameSixteen"));
const FrameFifteen = React.lazy(() => import("pages/FrameFifteen"));
const FrameFourteen = React.lazy(() => import("pages/FrameFourteen"));
const FrameThirteen = React.lazy(() => import("pages/FrameThirteen"));
const FrameTwelve = React.lazy(() => import("pages/FrameTwelve"));
const FrameEleven = React.lazy(() => import("pages/FrameEleven"));
const FrameTen = React.lazy(() => import("pages/FrameTen"));
const FrameNine = React.lazy(() => import("pages/FrameNine"));
const FrameEight = React.lazy(() => import("pages/FrameEight"));
const FrameSeven = React.lazy(() => import("pages/FrameSeven"));
const FrameFive = React.lazy(() => import("pages/FrameFive"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const FrameSix = React.lazy(() => import("pages/FrameSix"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameSix />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/framefive" element={<FrameFive />} />
          <Route path="/frameseven" element={<FrameSeven />} />
          <Route path="/frameeight" element={<FrameEight />} />
          <Route path="/framenine" element={<FrameNine />} />
          <Route path="/frameten" element={<FrameTen />} />
          <Route path="/frameeleven" element={<FrameEleven />} />
          <Route path="/frametwelve" element={<FrameTwelve />} />
          <Route path="/framethirteen" element={<FrameThirteen />} />
          <Route path="/framefourteen" element={<FrameFourteen />} />
          <Route path="/framefifteen" element={<FrameFifteen />} />
          <Route path="/framesixteen" element={<FrameSixteen />} />
          <Route path="/frameseventeen" element={<FrameSeventeen />} />
          <Route path="/frameeighteen" element={<FrameEighteen />} />
          <Route path="/framenineteen" element={<FrameNineteen />} />
          <Route path="/frametwenty" element={<FrameTwenty />} />
          <Route path="/frametwentyone" element={<FrameTwentyOne />} />
          <Route path="/frametwentytwo" element={<FrameTwentyTwo />} />
          <Route path="/frametwentythree" element={<FrameTwentyThree />} />
          <Route path="/frametwentyfour" element={<FrameTwentyFour />} />
          <Route path="/frametwentynine" element={<FrameTwentyNine />} />
          <Route path="/framethirty" element={<FrameThirty />} />
          <Route path="/framethirtyone" element={<FrameThirtyOne />} />
          <Route path="/framethirtytwo" element={<FrameThirtyTwo />} />
          <Route path="/framethirtyfour" element={<FrameThirtyFour />} />
          <Route path="/framethirtyfive" element={<FrameThirtyFive />} />
          <Route path="/framethirtythree" element={<FrameThirtyThree />} />
          <Route path="/framethirtysix" element={<FrameThirtySix />} />
          <Route path="/framethirtyseven" element={<FrameThirtySeven />} />
          <Route path="/framethirtyeight" element={<FrameThirtyEight />} />
          <Route path="/framethirtynine" element={<FrameThirtyNine />} />
          <Route path="/frameforty" element={<FrameForty />} />
          <Route path="/framefortyone" element={<FrameFortyOne />} />
          <Route path="/framefortyfour" element={<FrameFortyFour />} />
          <Route path="/framefortyfive" element={<FrameFortyFive />} />
          <Route path="/framefortysix" element={<FrameFortySix />} />
          <Route path="/framefortyseven" element={<FrameFortySeven />} />
          <Route path="/framefortyeight" element={<FrameFortyEight />} />
          <Route path="/framefortynine" element={<FrameFortyNine />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
