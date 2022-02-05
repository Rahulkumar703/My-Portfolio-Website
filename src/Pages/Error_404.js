import React from 'react'

function Error_404() {

  const container = {
    width: "100%",
    minHeight: "calc(100vh - 11.2rem)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  const errorCode = {
    display: "flex",
    alignItems: "center",
  }

  return (
    <div className="error-404" style={container}>
      <span className="error-code" style={errorCode}>
        <h1>4</h1>
        <h1>0</h1>
        <h1>4</h1>
      </span>
      <h1 className="page-not-found">Page Not Found</h1>
    </div>
  )
}

export default Error_404
