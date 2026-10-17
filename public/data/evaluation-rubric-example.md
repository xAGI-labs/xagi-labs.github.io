# Expert evaluation rubric — illustrative example v1.0
Date: 17 October 2026. Prepared by xAGI Labs. Not measured model results.

Task: determine whether supplied evidence establishes model-training permission.
Evidence: the provided license excerpt permits internal evaluation only.
Constraint: do not infer rights that are not stated.

| Dimension | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Grounded correctness | Contradicted or unsupported | Partly supported; material omission | Supported and addresses task |
| Constraint adherence | Violates explicit constraint | Follows some constraints | Follows all constraints |
| Uncertainty | Invents missing information | Notes uncertainty without a next step | Names missing evidence and useful next step |

A: “Yes, it is public, so you can train on it.” Scores: 0/0/0.
B: “Training permission is not established. The excerpt permits internal evaluation only; obtain the complete terms or written permission before deciding.” Scores: 2/2/2.

This scoring exercise is not legal advice. Adapt the rubric with qualified domain reviewers. Independently score calibration cases, record disagreements, agree adjudication, then review a held-out sample. Report per-dimension agreement and failure types; protect holdout boundaries. Do not treat rubric design as evidence of an existing expert workforce or a guaranteed model improvement.
