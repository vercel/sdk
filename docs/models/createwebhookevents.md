# CreateWebhookEvents

The webhooks events

## Example Usage

```typescript
import { CreateWebhookEvents } from "@vercel/sdk/models/createwebhookop.js";

let value: CreateWebhookEvents = "deployment.created";
```

## Values

```typescript
"budget.reached" | "budget.reset" | "domain.created" | "domain.dns.records.changed" | "domain.transfer-in.started" | "domain.transfer-in.completed" | "domain.transfer-in.failed" | "domain.certificate.add" | "domain.certificate.add.failed" | "domain.certificate.renew" | "domain.certificate.renew.failed" | "domain.certificate.deleted" | "domain.renewal" | "domain.renewal.failed" | "domain.auto-renew.changed" | "deployment.created" | "deployment.error" | "deployment.canceled" | "deployment.succeeded" | "deployment.ready" | "deployment.check-rerequested" | "deployment.promoted" | "deployment.integration.action.start" | "deployment.integration.action.cancel" | "deployment.integration.action.cleanup" | "edge-config.created" | "edge-config.deleted" | "edge-config.items.updated" | "firewall.attack" | "integration-configuration.permission-upgraded" | "integration-configuration.removed" | "integration-configuration.scope-change-confirmed" | "integration-resource.project-connected" | "integration-resource.project-disconnected" | "project.created" | "project.removed" | "project.domain.created" | "project.domain.updated" | "project.domain.deleted" | "project.domain.verified" | "project.domain.unverified" | "project.domain.moved" | "project.rolling-release.started" | "project.rolling-release.aborted" | "project.rolling-release.completed" | "project.rolling-release.approved" | "deployment-checks-completed" | "deployment-ready" | "deployment-prepared" | "deployment-error" | "deployment-check-rerequested" | "deployment-canceled" | "project-created" | "project-removed" | "domain-created" | "deployment" | "integration-configuration-permission-updated" | "integration-configuration-removed" | "integration-configuration-scope-change-confirmed" | "marketplace.invoice.created" | "marketplace.invoice.paid" | "marketplace.invoice.notpaid" | "marketplace.invoice.refunded" | "observability.anomaly" | "test-webhook"
```