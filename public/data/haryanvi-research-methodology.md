# Haryanvi TTS — methodology and evidence limits
Version 1.0 · 17 October 2026 · xAGI Labs

This describes the research workflow. It does not reproduce the private audit ledger, establish commercial recording rights or provide a production-quality benchmark.

1. Reconcile metadata to recording identifiers. Normalize transcripts; flag missing, duplicate or unmatched records and quarantine excluded files.
2. Document deterministic train/evaluation splits and check for record and speaker overlap where speaker metadata is available.
3. Pin the model source and checkpoint revision; verify configuration and pretrained parameter coverage before training.
4. Run a bounded smoke test and tiny overfit gate; persist configuration, seed, logs and samples for internal review.
5. Review generated audio against a recorded listening protocol before considering scale. A completed workflow check is not a speech-quality score.

The project page previously listed 2,768 metadata-linked recordings and 15/15 local workflow checks. A public item-level audit report and reproducible results supporting those counts are not supplied here; they are not presented as independently verified outcomes. No recordings or consent records are distributed with this note.

Upstream reference: https://github.com/AI4Bharat/IndicF5 — an upstream reference is not evidence of affiliation or a specific successful xAGI run. A future reproducible release should publish the pinned revision, permitted manifest/schema, split procedure, check definitions, logs, results and limitations. Source permissions must be reviewed separately before any commercial use.
