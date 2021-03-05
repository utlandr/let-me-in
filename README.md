# LET ME IN

A thing I hacked together that retrieves available managed isolation slots from New Zealand's MIQ reservation process.

Now exists as a firefox addon.

## Installation

This is not an official mozilla addon:

1. 'about:debugging' 
2. `This Firefox`
3. `Load Temporary Add-on...`
4. Select `manifest.json` located in the project

## Usage

Go to `https://allocation.miq.govt.nz/portal/`

The addon will now watch every 5 seconds for any new spaces, alerting you via a notification when a space is available.

In another tab, you can log into your account and make your booking.

## Custom date range

Go to `about:addons` and open the preferences tab for `let-me-in` to customise date range and the polling interval.

