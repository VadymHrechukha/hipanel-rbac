export const RoleHierarchy    = {"role:nobody":["nothing"],"role:unauthorized":["restore-password","deposit","server.pay","plan.read"],"role:client.support":["client.read","client.list"],"role:client.manager":["role:client.support","client.create","client.update","client.delete","contact.set-verified","client.block","client.unblock","client.get-note","client.set-note","purse.update","purse.read"],"role:employee.manager":["client.list","employee.read","employee.create","employee.update","employee.delete","document.acceptance","purse.update","purse.read"],"role:client.impersonator":["client.impersonate"],"role:client.master":["client.set-roles"],"role:contact.user":["contact.read","contact.create","contact.update","contact.delete"],"role:server.user":["server.read","server.control-power","server.control-system","server.set-note"],"role:server.admin":["role:server.user","server.create","server.update","server.delete","server.wizzard","server.set-label","consumption.read","server.manage-settings","server.see-label","server.move-disks"],"role:server.manager":["role:server.user","server.enable-block","server.disable-block","server.pay","server.sell","server.set-label","server.see-label"],"role:server.master":["role:server.admin","role:server.manager"],"role:hub.user":["hub.read"],"role:hub.admin":["hub.read","hub.create","hub.update","hub.delete"],"role:hub.manager":["hub.read","hub.sell"],"role:hub.master":["role:hub.admin","role:hub.manager"],"role:consumption.user":["consumption.read"],"role:consumption.manager":["consumption.read","consumption.update","consumption.delete"],"role:consumption.master":["consumption.read-all","role:consumption.user","role:consumption.manager"],"role:config.manager":["config.read","config.create","config.update","config.delete"],"role:integration.manager":["integration.read","integration.create","integration.update","integration.delete"],"role:account.user":["account.read","account.create","account.update","account.delete"],"role:backup.user":["backup.read","backup.delete"],"role:backuping.user":["backuping.read","backuping.create","backuping.update","backuping.delete"],"role:crontab.user":["crontab.read","crontab.create","crontab.update","crontab.delete"],"role:db.user":["db.read","db.create","db.update","db.delete"],"role:zone.manager":["zone.create","zone.update","zone.read","zone.delete"],"role:hdomain.user":["hdomain.read","hdomain.create","hdomain.update","hdomain.delete","hdomain.set-dns"],"role:ip.admin":["ip.read","ip.create","ip.update","ip.delete"],"role:mail.user":["mail.read","mail.create","mail.update","mail.delete"],"role:request.user":["request.read","request.create","request.update","request.delete"],"role:service.admin":["service.read","service.create","service.update","service.delete"],"role:vhost.user":["vhost.read","vhost.create","vhost.update","vhost.delete"],"role:hosting.reader":["account.read","backup.read","backuping.read","crontab.read","db.read","hdomain.read","ip.read","mail.read","request.read","service.read","vhost.read"],"role:hosting.user":["role:account.user","role:backup.user","role:backuping.user","role:crontab.user","role:db.user","role:hdomain.user","role:mail.user","role:request.user","role:vhost.user","ip.read","service.read"],"role:hosting.admin":["role:account.user","role:backup.user","role:backuping.user","role:crontab.user","role:db.user","role:hdomain.user","role:mail.user","role:request.user","role:vhost.user","role:ip.admin","role:service.admin"],"role:purse.user":["purse.read"],"role:purse.manager":["role:purse.user","purse.update","purse.create"],"role:purse.master":["role:purse.manager"],"role:costprice.user":["costprice.read"],"role:costprice.manager":["role:costprice.user","costprice.create","costprice.update","costprice.delete"],"role:bill.user":["bill.read","deposit"],"role:bill.junior-manager":["bill.read"],"role:bill.manager":["bill.read","bill.create","bill.update","bill.delete","deposit","role:purse.manager"],"role:bill.master":["bill.read","bill.create","bill.update","bill.delete","deposit","bill.import","bill.create-exchange","role:purse.master"],"role:requisites.user":["requisites.read"],"role:requisites.manager":["requisites.read","requisites.create","requisites.update","requisites.delete"],"role:plan.user":["plan.read","price.read","finance.read"],"role:plan.manager":["plan.read","plan.create","plan.update","plan.delete","plan.force-read","price.read","price.update","price.delete","price.create"],"role:plan.master":["role:plan.manager"],"role:document.user":["document.read","document.create","document.invoice"],"role:document.employee":["document.read","document.create","document.acceptance"],"role:document.manager":["role:document.user","document.update","document.delete","document.generate","document.acceptance","document.invoice"],"role:document.master":["document.generate-all"],"role:sale.user":["sale.read"],"role:sale.manager":["sale.read","sale.delete","sale.update","sale.create"],"role:sale.master":["role:sale.manager"],"role:finance.reader":["plan.read","bill.read","document.read","finance.read","bill.read"],"role:finance.user":["role:finance.reader","role:bill.user","role:plan.user","role:document.user"],"role:finance.employee":["role:bill.user","role:document.employee","finance.read"],"role:finance.manager":["role:finance.reader","role:bill.junior-manager","role:plan.manager","role:document.manager","role:sale.manager","finance.read"],"role:finance.master":["role:finance.manager","role:bill.manager","role:plan.master","role:document.manager","role:sale.master"],"role:stock.user":["stock.read","part.read","move.read","model.read","move.get-directions","order.read"],"role:stock.admin":["role:stock.user","move.create","move.update","move.delete"],"role:stock.manager":["role:stock.user","part.read-all-hierarchy","part.create","part.update","part.delete","move.create","move.update","move.delete","model.create","model.update","model.delete"],"role:stock.master":["role:stock.manager","move.read-all","role:order.master"],"role:order.user":["order.read","order.create","order.update","order.delete"],"role:order.manager":["role:order.user"],"role:order.master":["role:order.manager","order.read-profits"],"role:project.user":["consumption.read","part.read","move.get-directions"],"role:client":["role:unauthorized","have-goods","pay","role:ticket.user","role:domain.user","domain.pay","domain.push","domain.delete-agp","role:dns.user","role:certificate.user","certificate.pay","certificate.push","role:contact.user","role:document.user","document.invoice","role:server.user","server.pay","role:hosting.user","role:finance.user","role:sale.user","client.notify"],"role:support":["access-subclients","support","role:ticket.manager","role:client.support","role:domain.user","role:dns.user","role:certificate.user","role:contact.user","role:server.user","role:hosting.user"],"role:admin":["admin","role:support","role:hub.admin","role:stock.admin","role:server.admin","role:hosting.admin"],"role:accounter":["role:manager","role:hub.manager","role:stock.manager"],"role:manager":["manage","access-reseller","role:support","role:document.manager","role:domain.manager","domain.pay","domain.push","domain.delete-agp","role:server.manager","role:consumption.manager","role:dns.manager","role:certificate.manager","certificate.pay","certificate.push","role:contact.user","contact.force-verify","role:client.manager","role:finance.manager","mailing.prepare","mailing.send","client.set-tmp-pwd","client.notify","role:purse.user"],"role:reseller":["have-goods","resell","role:finance.master","deny:access-reseller","role:manager","role:integration.manager"],"role:employee":["restore-password","role:contact.user","role:finance.employee","employee.read"],"role:master":["role:client.master","role:finance.master","role:bill.master","role:document.master","role:plan.master","role:sale.master","role:stock.master","role:domain.master","role:server.master","role:hub.master","role:superpowers","resell"],"role:owner":["role:manager","role:bill.master","role:stock.manager","resell","own"],"role:superpowers":["see-no-mans","part.sell","client.set-others-allowed-ips"],"role:junior-manager":["access-subclients","access-reseller","role:hub.user","role:stock.user","part.read-all-hierarchy","plan.force-read","plan.read","document.read","finance.read","bill.read","client.read","client.list","contact.read","server.read","consumption.read"],"role:domain.user":["domain.read","domain.update","domain.delete-agp","domain.set-nss"],"role:domain.manager":["role:domain.user","domain.delete"],"role:domain.master":["role:domain.manager","domain.freeze","domain.unfreeze","domain.push","domain.force-push","domain.force-send-foa","domain.approve-trasfer-out","domain.maintain"],"role:dns.user":["dns.create","dns.read","dns.update","dns.delete"],"role:dns.manager":["role:dns.user"],"role:certificate.user":["certificate.read","certificate.create","certificate.update"],"role:certificate.manager":["role:certificate.user","certificate.delete"],"role:ticket.user":["ticket.read","ticket.create","ticket.answer","ticket.close"],"role:ticket.manager":["role:ticket.user","ticket.update","ticket.delete"],"role:beta-tester":["test.beta"],"role:alpha-tester":["role:beta-tester","test.alpha"],"role:owner-staff":["ref.view.not-used","bill.charges.read","bill.see-server-charges","part.read-all-hierarchy","client.set-description","owner-staff"],"role:almighty":["role:admin","role:manager","role:document.master","role:finance.master","role:stock.master","role:config.manager","role:costprice.manager","domain.freeze","domain.force-push","domain.delete","employee.read","domain.force-send-foa","deny:deposit"]};

export enum Role    {
    "Nobody" = "role:nobody",
    "Unauthorized" = "role:unauthorized",
    "ClientSupport" = "role:client.support",
    "ClientManager" = "role:client.manager",
    "EmployeeManager" = "role:employee.manager",
    "ClientImpersonator" = "role:client.impersonator",
    "ClientMaster" = "role:client.master",
    "ContactUser" = "role:contact.user",
    "ServerUser" = "role:server.user",
    "ServerAdmin" = "role:server.admin",
    "ServerManager" = "role:server.manager",
    "ServerMaster" = "role:server.master",
    "HubUser" = "role:hub.user",
    "HubAdmin" = "role:hub.admin",
    "HubManager" = "role:hub.manager",
    "HubMaster" = "role:hub.master",
    "ConsumptionUser" = "role:consumption.user",
    "ConsumptionManager" = "role:consumption.manager",
    "ConsumptionMaster" = "role:consumption.master",
    "ConfigManager" = "role:config.manager",
    "IntegrationManager" = "role:integration.manager",
    "AccountUser" = "role:account.user",
    "BackupUser" = "role:backup.user",
    "BackupingUser" = "role:backuping.user",
    "CrontabUser" = "role:crontab.user",
    "DbUser" = "role:db.user",
    "ZoneManager" = "role:zone.manager",
    "HdomainUser" = "role:hdomain.user",
    "IpAdmin" = "role:ip.admin",
    "MailUser" = "role:mail.user",
    "RequestUser" = "role:request.user",
    "ServiceAdmin" = "role:service.admin",
    "VhostUser" = "role:vhost.user",
    "HostingReader" = "role:hosting.reader",
    "HostingUser" = "role:hosting.user",
    "HostingAdmin" = "role:hosting.admin",
    "PurseUser" = "role:purse.user",
    "PurseManager" = "role:purse.manager",
    "PurseMaster" = "role:purse.master",
    "CostpriceUser" = "role:costprice.user",
    "CostpriceManager" = "role:costprice.manager",
    "BillUser" = "role:bill.user",
    "BillJuniorManager" = "role:bill.junior-manager",
    "BillManager" = "role:bill.manager",
    "BillMaster" = "role:bill.master",
    "RequisitesUser" = "role:requisites.user",
    "RequisitesManager" = "role:requisites.manager",
    "PlanUser" = "role:plan.user",
    "PlanManager" = "role:plan.manager",
    "PlanMaster" = "role:plan.master",
    "DocumentUser" = "role:document.user",
    "DocumentEmployee" = "role:document.employee",
    "DocumentManager" = "role:document.manager",
    "DocumentMaster" = "role:document.master",
    "SaleUser" = "role:sale.user",
    "SaleManager" = "role:sale.manager",
    "SaleMaster" = "role:sale.master",
    "FinanceReader" = "role:finance.reader",
    "FinanceUser" = "role:finance.user",
    "FinanceEmployee" = "role:finance.employee",
    "FinanceManager" = "role:finance.manager",
    "FinanceMaster" = "role:finance.master",
    "StockUser" = "role:stock.user",
    "StockAdmin" = "role:stock.admin",
    "StockManager" = "role:stock.manager",
    "StockMaster" = "role:stock.master",
    "OrderUser" = "role:order.user",
    "OrderManager" = "role:order.manager",
    "OrderMaster" = "role:order.master",
    "ProjectUser" = "role:project.user",
    "Client" = "role:client",
    "Support" = "role:support",
    "Admin" = "role:admin",
    "Accounter" = "role:accounter",
    "Manager" = "role:manager",
    "Reseller" = "role:reseller",
    "Employee" = "role:employee",
    "Master" = "role:master",
    "Owner" = "role:owner",
    "Superpowers" = "role:superpowers",
    "JuniorManager" = "role:junior-manager",
    "DomainUser" = "role:domain.user",
    "DomainManager" = "role:domain.manager",
    "DomainMaster" = "role:domain.master",
    "DnsUser" = "role:dns.user",
    "DnsManager" = "role:dns.manager",
    "CertificateUser" = "role:certificate.user",
    "CertificateManager" = "role:certificate.manager",
    "TicketUser" = "role:ticket.user",
    "TicketManager" = "role:ticket.manager",
    "BetaTester" = "role:beta-tester",
    "AlphaTester" = "role:alpha-tester",
    "OwnerStaff" = "role:owner-staff",
    "Almighty" = "role:almighty",
};

export enum Permission    {
    "Nothing" = "nothing",
    "RestorePassword" = "restore-password",
    "Deposit" = "deposit",
    "ServerPay" = "server.pay",
    "PlanRead" = "plan.read",
    "ClientRead" = "client.read",
    "ClientList" = "client.list",
    "ClientCreate" = "client.create",
    "ClientUpdate" = "client.update",
    "ClientDelete" = "client.delete",
    "ContactSetVerified" = "contact.set-verified",
    "ClientBlock" = "client.block",
    "ClientUnblock" = "client.unblock",
    "ClientGetNote" = "client.get-note",
    "ClientSetNote" = "client.set-note",
    "PurseUpdate" = "purse.update",
    "PurseRead" = "purse.read",
    "EmployeeRead" = "employee.read",
    "EmployeeCreate" = "employee.create",
    "EmployeeUpdate" = "employee.update",
    "EmployeeDelete" = "employee.delete",
    "DocumentAcceptance" = "document.acceptance",
    "ClientImpersonate" = "client.impersonate",
    "ClientSetRoles" = "client.set-roles",
    "ContactRead" = "contact.read",
    "ContactCreate" = "contact.create",
    "ContactUpdate" = "contact.update",
    "ContactDelete" = "contact.delete",
    "ServerRead" = "server.read",
    "ServerControlPower" = "server.control-power",
    "ServerControlSystem" = "server.control-system",
    "ServerSetNote" = "server.set-note",
    "ServerCreate" = "server.create",
    "ServerUpdate" = "server.update",
    "ServerDelete" = "server.delete",
    "ServerWizzard" = "server.wizzard",
    "ServerSetLabel" = "server.set-label",
    "ConsumptionRead" = "consumption.read",
    "ServerManageSettings" = "server.manage-settings",
    "ServerSeeLabel" = "server.see-label",
    "ServerMoveDisks" = "server.move-disks",
    "ServerEnableBlock" = "server.enable-block",
    "ServerDisableBlock" = "server.disable-block",
    "ServerSell" = "server.sell",
    "HubRead" = "hub.read",
    "HubCreate" = "hub.create",
    "HubUpdate" = "hub.update",
    "HubDelete" = "hub.delete",
    "HubSell" = "hub.sell",
    "ConsumptionUpdate" = "consumption.update",
    "ConsumptionDelete" = "consumption.delete",
    "ConsumptionReadAll" = "consumption.read-all",
    "ConfigRead" = "config.read",
    "ConfigCreate" = "config.create",
    "ConfigUpdate" = "config.update",
    "ConfigDelete" = "config.delete",
    "IntegrationRead" = "integration.read",
    "IntegrationCreate" = "integration.create",
    "IntegrationUpdate" = "integration.update",
    "IntegrationDelete" = "integration.delete",
    "AccountRead" = "account.read",
    "AccountCreate" = "account.create",
    "AccountUpdate" = "account.update",
    "AccountDelete" = "account.delete",
    "BackupRead" = "backup.read",
    "BackupDelete" = "backup.delete",
    "BackupingRead" = "backuping.read",
    "BackupingCreate" = "backuping.create",
    "BackupingUpdate" = "backuping.update",
    "BackupingDelete" = "backuping.delete",
    "CrontabRead" = "crontab.read",
    "CrontabCreate" = "crontab.create",
    "CrontabUpdate" = "crontab.update",
    "CrontabDelete" = "crontab.delete",
    "DbRead" = "db.read",
    "DbCreate" = "db.create",
    "DbUpdate" = "db.update",
    "DbDelete" = "db.delete",
    "ZoneCreate" = "zone.create",
    "ZoneUpdate" = "zone.update",
    "ZoneRead" = "zone.read",
    "ZoneDelete" = "zone.delete",
    "HdomainRead" = "hdomain.read",
    "HdomainCreate" = "hdomain.create",
    "HdomainUpdate" = "hdomain.update",
    "HdomainDelete" = "hdomain.delete",
    "HdomainSetDns" = "hdomain.set-dns",
    "IpRead" = "ip.read",
    "IpCreate" = "ip.create",
    "IpUpdate" = "ip.update",
    "IpDelete" = "ip.delete",
    "MailRead" = "mail.read",
    "MailCreate" = "mail.create",
    "MailUpdate" = "mail.update",
    "MailDelete" = "mail.delete",
    "RequestRead" = "request.read",
    "RequestCreate" = "request.create",
    "RequestUpdate" = "request.update",
    "RequestDelete" = "request.delete",
    "ServiceRead" = "service.read",
    "ServiceCreate" = "service.create",
    "ServiceUpdate" = "service.update",
    "ServiceDelete" = "service.delete",
    "VhostRead" = "vhost.read",
    "VhostCreate" = "vhost.create",
    "VhostUpdate" = "vhost.update",
    "VhostDelete" = "vhost.delete",
    "PurseCreate" = "purse.create",
    "CostpriceRead" = "costprice.read",
    "CostpriceCreate" = "costprice.create",
    "CostpriceUpdate" = "costprice.update",
    "CostpriceDelete" = "costprice.delete",
    "BillRead" = "bill.read",
    "BillCreate" = "bill.create",
    "BillUpdate" = "bill.update",
    "BillDelete" = "bill.delete",
    "BillImport" = "bill.import",
    "BillCreateExchange" = "bill.create-exchange",
    "RequisitesRead" = "requisites.read",
    "RequisitesCreate" = "requisites.create",
    "RequisitesUpdate" = "requisites.update",
    "RequisitesDelete" = "requisites.delete",
    "PriceRead" = "price.read",
    "FinanceRead" = "finance.read",
    "PlanCreate" = "plan.create",
    "PlanUpdate" = "plan.update",
    "PlanDelete" = "plan.delete",
    "PlanForceRead" = "plan.force-read",
    "PriceUpdate" = "price.update",
    "PriceDelete" = "price.delete",
    "PriceCreate" = "price.create",
    "DocumentRead" = "document.read",
    "DocumentCreate" = "document.create",
    "DocumentInvoice" = "document.invoice",
    "DocumentUpdate" = "document.update",
    "DocumentDelete" = "document.delete",
    "DocumentGenerate" = "document.generate",
    "DocumentGenerateAll" = "document.generate-all",
    "SaleRead" = "sale.read",
    "SaleDelete" = "sale.delete",
    "SaleUpdate" = "sale.update",
    "SaleCreate" = "sale.create",
    "StockRead" = "stock.read",
    "PartRead" = "part.read",
    "MoveRead" = "move.read",
    "ModelRead" = "model.read",
    "MoveGetDirections" = "move.get-directions",
    "OrderRead" = "order.read",
    "MoveCreate" = "move.create",
    "MoveUpdate" = "move.update",
    "MoveDelete" = "move.delete",
    "PartReadAllHierarchy" = "part.read-all-hierarchy",
    "PartCreate" = "part.create",
    "PartUpdate" = "part.update",
    "PartDelete" = "part.delete",
    "ModelCreate" = "model.create",
    "ModelUpdate" = "model.update",
    "ModelDelete" = "model.delete",
    "MoveReadAll" = "move.read-all",
    "OrderCreate" = "order.create",
    "OrderUpdate" = "order.update",
    "OrderDelete" = "order.delete",
    "OrderReadProfits" = "order.read-profits",
    "HaveGoods" = "have-goods",
    "Pay" = "pay",
    "DomainPay" = "domain.pay",
    "DomainPush" = "domain.push",
    "DomainDeleteAgp" = "domain.delete-agp",
    "CertificatePay" = "certificate.pay",
    "CertificatePush" = "certificate.push",
    "ClientNotify" = "client.notify",
    "AccessSubclients" = "access-subclients",
    "Support" = "support",
    "Admin" = "admin",
    "Manage" = "manage",
    "AccessReseller" = "access-reseller",
    "ContactForceVerify" = "contact.force-verify",
    "MailingPrepare" = "mailing.prepare",
    "MailingSend" = "mailing.send",
    "ClientSetTmpPwd" = "client.set-tmp-pwd",
    "Resell" = "resell",
    "DenyAccessReseller" = "deny:access-reseller",
    "Own" = "own",
    "SeeNoMans" = "see-no-mans",
    "PartSell" = "part.sell",
    "ClientSetOthersAllowedIps" = "client.set-others-allowed-ips",
    "DomainRead" = "domain.read",
    "DomainUpdate" = "domain.update",
    "DomainSetNss" = "domain.set-nss",
    "DomainDelete" = "domain.delete",
    "DomainFreeze" = "domain.freeze",
    "DomainUnfreeze" = "domain.unfreeze",
    "DomainForcePush" = "domain.force-push",
    "DomainForceSendFoa" = "domain.force-send-foa",
    "DomainApproveTrasferOut" = "domain.approve-trasfer-out",
    "DomainMaintain" = "domain.maintain",
    "DnsCreate" = "dns.create",
    "DnsRead" = "dns.read",
    "DnsUpdate" = "dns.update",
    "DnsDelete" = "dns.delete",
    "CertificateRead" = "certificate.read",
    "CertificateCreate" = "certificate.create",
    "CertificateUpdate" = "certificate.update",
    "CertificateDelete" = "certificate.delete",
    "TicketRead" = "ticket.read",
    "TicketCreate" = "ticket.create",
    "TicketAnswer" = "ticket.answer",
    "TicketClose" = "ticket.close",
    "TicketUpdate" = "ticket.update",
    "TicketDelete" = "ticket.delete",
    "TestBeta" = "test.beta",
    "TestAlpha" = "test.alpha",
    "RefViewNotUsed" = "ref.view.not-used",
    "BillChargesRead" = "bill.charges.read",
    "BillSeeServerCharges" = "bill.see-server-charges",
    "ClientSetDescription" = "client.set-description",
    "OwnerStaff" = "owner-staff",
    "DenyDeposit" = "deny:deposit",
};
