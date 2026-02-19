# GetWebhookEvents

The webhooks events

## Example Usage

```typescript
import { GetWebhookEvents } from "@vercel/sdk/models/getwebhookop.js";

let value: GetWebhookEvents = "deployment.created";
```

## Values

```typescript
"budget.reached" | "domain.created" | "domain.dns.records.changed" | "domain.transfer-in.started" | "domain.transfer-in.completed" | "domain.transfer-in.failed" | "domain.certificate.add" | "domain.certificate.add.failed" | "domain.certificate.renew" | "domain.certificate.renew.failed" | "domain.certificate.deleted" | "domain.renewal" | "domain.renewal.failed" | "domain.auto-renew.changed" | "deployment.created" | "deployment.cleanup" | "deployment.error" | "deployment.canceled" | "deployment.succeeded" | "deployment.ready" | "deployment.check-rerequested" | "deployment.promoted" | "deployment.integration.action.start" | "deployment.integration.action.cancel" | "deployment.integration.action.cleanup" | "deployment.checkrun.start" | "deployment.checkrun.cancel" | "edge-config.created" | "edge-config.deleted" | "edge-config.items.updated" | "firewall.attack" | "firewall.system-rule-anomaly" | "firewall.custom-rule-anomaly" | "alerts.triggered" | "integration-configuration.permission-upgraded" | "integration-configuration.removed" | "integration-configuration.scope-change-confirmed" | "integration-configuration.transferred" | "integration-resource.project-connected" | "integration-resource.project-disconnected" | "project.created" | "project.removed" | "project.renamed" | "project.env-variable.created" | "project.env-variable.updated" | "project.env-variable.deleted" | "project.domain.created" | "project.domain.updated" | "project.domain.deleted" | "project.domain.verified" | "project.domain.unverified" | "project.domain.moved" | "project.rolling-release.started" | "project.rolling-release.aborted" | "project.rolling-release.completed" | "project.rolling-release.approved" | "deployment.checks.failed" | "deployment.checks.succeeded" | "deployment-checks-completed" | "deployment-ready" | "deployment-prepared" | "deployment-error" | "deployment-check-rerequested" | "deployment-canceled" | "project-created" | "project-removed" | "domain-created" | "deployment" | "integration-configuration-permission-updated" | "integration-configuration-removed" | "integration-configuration-scope-change-confirmed" | "marketplace.member.changed" | "marketplace.invoice.created" | "marketplace.invoice.paid" | "marketplace.invoice.notpaid" | "marketplace.invoice.overdue" | "marketplace.invoice.refunded" | "ai-gateway.balance-depleted" | "ai-gateway.auto-reload.limit-reached" | "observability.anomaly" | "observability.anomaly-error" | "observability.usage-anomaly" | "observability.error-anomaly" | "botid.anomaly" | "test-webhook" | "comment.created" | "comment.updated" | "comment.deleted" | "comment.resolved" | "comment.unresolved" | "comment.reaction-added" | "comment.reaction-removed" | "comment.mentioned"
```