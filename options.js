function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
	  start_date: document.querySelector("#start_date").value,
	  end_date: document.querySelector("#end_date").value,
	  interval: document.querySelector("#interval").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    console.log(result);
    document.querySelector("#start_date").value = result.start_date || "2021-01-01";
    document.querySelector("#end_date").value = result.end_date || "2021-12-31";
    document.querySelector("#interval").value = result.interval || 5;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get(["start_date", "end_date", "interval"]);
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

