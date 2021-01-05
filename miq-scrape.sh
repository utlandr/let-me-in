#!/usr/bin/env bash
while [ 1 ]
do
	query=$(curl -s 'https://allocation.miq.govt.nz/portal/organisation/59d314d9-e9a8-437f-922b-3e94202e8ab6/event/MIQ-DEFAULT-EVENT/accommodation#step-2' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://allocation.miq.govt.nz/portal/organisation/59d314d9-e9a8-437f-922b-3e94202e8ab6/event/MIQ-DEFAULT-EVENT/list' -H 'Connection: keep-alive' -H 'Cookie: visid_incap_1875607=Y9kLfc5YTi684eoePZJZwZIk0V8AAAAAQUIPAAAAAAC2U4rnKoFBgOF9BjfCyd2+; incap_ses_364_1875607=NiRIN27SbBflr7zXRzANBZIk0V8AAAAAikZ+AcppK5xhWM7tnDK5zA==; PHPSESSID=o7t0ecd1ccijrl7hn94clos7di' -H 'Upgrade-Insecure-Requests: 1' -H 'Cache-Control: max-age=0' -H 'TE: Trailers' | grep "data-arrival-dates" | cut -d \" -f2 | sed 's/_/\n/g' | sort)

	echo $query
	for available in $query
	do
		month=$(echo $available | awk -F'-' '{print $2}')
		if [ $month == '01' ]
		then
			notify-send -u critical -t 500 "[$available] - JANUARY DETECTED SWITCH NOW"
		break
		fi
	done
	
	break
	
done

