/*
 * Copyright 2012-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package sample.jetty.repository;

import org.springframework.stereotype.Repository;
import sample.jetty.domain.Users;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
class JpaReportRepository implements ReportRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List findAll() {
		return this.entityManager.createQuery("SELECT t FROM Users t", Users.class)
				.getResultList();
	}

}
