"""Run only against the local disabled Worker on AWS; never submits an enquiry."""
import json
import urllib.request
import urllib.error

base = 'http://127.0.0.1:8795/api/dataset-enquiry'

def get(path, auth=None, method='GET'):
    headers = {'Authorization': 'Bearer ' + auth} if auth else {}
    try:
        with urllib.request.urlopen(urllib.request.Request(base + path, headers=headers, method=method), timeout=10) as result:
            return result.status, json.load(result)
    except urllib.error.HTTPError as error:
        return error.code, json.load(error)

assert get('/report')[0] == 401
assert get('/report', 'wrong')[0] == 401
status, report = get('/report', 'local-synthetic-report-token')
assert status == 200 and report['totalConfirmed'] == 0 and report['confirmed'] == [] and report['review'] == [], report
assert report['cleanupAlarmScheduled'] is True
assert get('/mark-test?receipt=not-a-receipt', 'local-synthetic-report-token', 'POST')[0] == 400
assert get('/mark-test?receipt=00000000-0000-4000-8000-000000000000', 'local-synthetic-report-token', 'POST') == (200, {'changed': 0})
assert get('')[0] == 503
print(json.dumps({'runtime': 'local workerd SQLite Durable Object', 'report_status': status, 'confirmed': report['totalConfirmed'], 'unauthenticated_report': 401, 'bad_receipt': 400, 'disabled_submission': 503, 'email_sent': False}))
