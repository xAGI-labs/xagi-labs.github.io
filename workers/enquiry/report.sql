-- Accepted = notification accepted by the email service, not a qualified buyer
-- or a guarantee of inbox delivery. Tests must be marked is_test=1.
SELECT date(accepted_at) AS day, intent, placement, modality, source, COUNT(*) AS confirmed_enquiries
FROM enquiries WHERE status = 'accepted' AND is_test = 0
GROUP BY day, intent, placement, modality, source ORDER BY day DESC;
SELECT status, COUNT(*) AS awaiting_review FROM enquiries
WHERE status != 'accepted' AND is_test = 0 GROUP BY status;
